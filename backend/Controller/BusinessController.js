const business = require("../Schema/BusinessSchema");
const cloundinary = require("../cloundinary/cloudinary");
const upload = require("../cloundinary/upload");

exports.addBusiness = async (req, res) => {
  try {
    const { feature, name } = req.body;
    const image = req.files["image"][0];
    async function processImage(imageBuffer, maxSizeKB) {
     

   const imageString = imageBuffer.toString("base64");

  const result = await cloundinary.uploader.upload(
    `data:image/jpeg;base64,${imageString}`,
    {
      folder: "business-Images",
      resource_type: "image",
    }
  );

      return result.secure_url;
    }
    const image_url = await processImage(image.buffer, 1000);


        const newBusiness = new business({
        name,
        feature,
          image: image_url,
        });
        await newBusiness.save();
        res.status(200).json({ message: "Business Added Successfully" });

  } catch (err) {

    console.log(err)
    res.status(500).json({ message: "Error in Adding Business" });
  }
};



  exports.getBusiness=async(req,res)=>{
    try{
        const newBusiness = await business.find();
        res.status(200).json(newBusiness)
    }catch (error) {
        res.status(500).json({ message: "Business are failed to fetch", err });
    }
  }



    exports.deleteBusiness=async(req,res)=>{
      try {
        const {id}=req.body;
        const deleteBusiness = await business.findByIdAndDelete(id);
        res.status(200).json({ message: "business Deleted Successfully" });  
      }catch(err){
        console.log(err);
        res.status(500).json({ message: "business delete failed", err });
      }
  }


  exports.updateBusiness=async(req,res)=>{
    try{


         const { feature, name ,id} = req.body;
        console.log(id)
          let image;


           const  existingBusiness= await business.findById(id);

           
    if (!existingBusiness) {
      return res.status(404).json({ message: "business not found" });
    }

   if (req.files && req.files["image"]) {
      image = req.files["image"][0];
     async function processImage(imageBuffer, maxSizeKB) {
     

   const imageString = imageBuffer.toString("base64");

  const result = await cloundinary.uploader.upload(
    `data:image/jpeg;base64,${imageString}`,
    {
      folder: "business-Images",
      resource_type: "image",
    }
  );

      return result.secure_url;
    }
    image= await processImage(image.buffer, 1000);
    } else {
      image = existingBusiness.image;
    }


     const updateBusiness = await business.findByIdAndUpdate(
          id,
          {
           image,
            name,
           
            feature
          },
          {
            new: true,
          }
        );
    
        if (!updateBusiness) {
          return res.status(404).json({ message: "Business not found" });
        } else {
          return res.status(200).json(updateBusiness);
        }

    }catch(err){
  res.status(500).json({ message: err.message });
    }
  }

