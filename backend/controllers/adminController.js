// import validator from "validator"
// import bcrypt from 'bcrypt'
// import { v2 as cloudinary } from "cloudinary"
// import doctorModel from "../models/doctorsModel.js";




// const addDoctor = async (req, res) => {
//     try {
//         const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
//         const imageFile = req.file;

//         //checking for all data to add doctor
//         if (!name || !email || !password || !speciality || !degree || !degree || !experience || !about || !fees || !address) {
//             return res.json({ success: false, message: "Missing Details" })
//         }

//         //validating email format
//         if (!validator.isEmail(email)) {
//             return res.json({ success: false, message: "Please enter a valid email" })
//         }

//         //validating strong password
//         if (password.length < 8) {
//             return res.json({ success: false, message: "Please enter a strong password" })

//         }
        

//         //hashing doctor password
//         const salt = await bcrypt.genSalt(10)
//         const hashPassword = await bcrypt.hash(password, salt)

//         //upload image to cloudinary
//         const imageUpload =  await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
//         const imageUrl = imageUpload.secure_url

//         const doctorData = {
//             name,
//             email,
//             image:imageUrl,
//             password:hashPassword,
//             speciality,
//             degree,
//             experience,
//             about,
//             fees,
//             address:JSON.parse(address),
//             date:Date.now()
//         }
//         const newDoctor = new doctorModel(doctorData)
//         await newDoctor.save()

//         res.json({success:true,message:"Doctor Added"})
//     } catch (error) {
//         console.error(error);
//         res.json({success:false, message: error.message });
//     }
// }

// export { addDoctor };



import validator from "validator"
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from "cloudinary"
import doctorModel from "../models/doctorsModel.js";

const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
        const imageFile = req.file;

        // Checking for all data to add doctor
        if (!name || !email || !password || !speciality || !degree || !degree || !experience || !about || !fees || !address) {
            return res.json({ success: false, message: "Missing Details" })
        }

        // Validating email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }

        // Validating strong password
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }

        // Hashing doctor password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        // Check if image is uploaded
        if (!imageFile) {
            return res.json({ success: false, message: "No image uploaded or file upload failed." });
        }

        // Upload image to Cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
        const imageUrl = imageUpload.secure_url;

        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now()
        }

        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();

        res.json({ success: true, message: "Doctor Added" })
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
}

export { addDoctor };
