const service = require("../Schema/ServiceSchema");
const cloundinary = require("../cloundinary/cloudinary");
const upload = require("../cloundinary/upload");

exports.addService = async (req, res) => {
  try {
    const { feature, benefits, description, name } = req.body;
    const image = req.files["image"][0];
    async function processImage(imageBuffer, maxSizeKB) {
     

   const imageString = imageBuffer.toString("base64");

  const result = await cloundinary.uploader.upload(
    `data:image/jpeg;base64,${imageString}`,
    {
      folder: "Service-Images",
      resource_type: "image",
    }
  );

      return result.secure_url;
    }
    const image_url = await processImage(image.buffer, 1000);


        const newService = new service({
        name,
        description,
        benefits,
        feature,
          image: image_url,
        });
        await newService.save();
        res.status(200).json({ message: "Service Added Successfully" });

  } catch (err) {

    console.log(err)
    res.status(500).json({ message: "Error in Adding Service" });
  }
};



  exports.getService=async(req,res)=>{
    try{
        const services = await service.find();
        res.status(200).json(services)
    }catch (error) {
        res.status(500).json({ message: "services are failed to fetch", err });
    }
  }



    exports.deleteService=async(req,res)=>{
      try {
        const {id}=req.body;
        const deleteService = await service.findByIdAndDelete(id);
        res.status(200).json({ message: "Service Deleted Successfully" });  
      }catch(err){
        console.log(err);
        res.status(500).json({ message: "Service delete failed", err });
      }
  }


  exports.updateService=async(req,res)=>{
    try{


         const { feature, benefits, description, name ,id} = req.body;
        console.log(id)
          let image;


           const  existingService= await service.findById(id);

           
    if (!existingService) {
      return res.status(404).json({ message: "service not found" });
    }

   if (req.files && req.files["image"]) {
      image = req.files["image"][0];
     async function processImage(imageBuffer, maxSizeKB) {
     

   const imageString = imageBuffer.toString("base64");

  const result = await cloundinary.uploader.upload(
    `data:image/jpeg;base64,${imageString}`,
    {
      folder: "Service-Images",
      resource_type: "image",
    }
  );

      return result.secure_url;
    }
    image= await processImage(image.buffer, 1000);
    } else {
      image = existingService.image;
    }


     const updateService = await service.findByIdAndUpdate(
          id,
          {
           image,
            name,
            description,
            benefits,
            feature
          },
          {
            new: true,
          }
        );
    
        if (!updateService) {
          return res.status(404).json({ message: "service not found" });
        } else {
          return res.status(200).json(updateService);
        }

    }catch(err){
  res.status(500).json({ message: err.message });
    }
  }

