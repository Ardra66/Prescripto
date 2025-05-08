
// import jwt from 'jsonwebtoken';

// // Admin authentication middleware
// const authAdmin = async (req, res, next) => {
//     try {
//         const authHeader = req.headers.authorization;

//         if (!authHeader || !authHeader.startsWith('Bearer ')) {
//             return res.status(401).json({ success: false, message: 'No token provided. Please log in again.' });
//         }
        
//         const token = authHeader.split(' ')[1]; // extract the actual token
//         const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        

//         // if (!atoken) {
//         //     return res.status(401).json({ success: false, message: 'No token provided. Please log in again.' });
//         // }

//         // const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);

//         // Check if the decoded email matches the admin email
//         if (token_decode.email !== process.env.ADMIN_EMAIL) {
//             return res.status(403).json({ success: false, message: 'Access denied. Invalid admin credentials.' });
//         }

//         next(); // Token is valid, proceed

//     } catch (error) {
//         if (error.name === 'TokenExpiredError') {
//             return res.status(401).json({ success: false, message: 'Session expired. Please log in again.' });
//         }
//         console.error('Token verification error:', error.message);
//         return res.status(401).json({ success: false, message: 'Invalid token. Please log in again.' });
//     }
// };

// export default authAdmin;



import jwt from 'jsonwebtoken';

// Admin authentication middleware
const authAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'No token provided. Please log in again.' });
    }

    const token = authHeader.split(' ')[1];
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    if (token_decode.role !== 'admin')
    
      {
      return res.status(403).json({ success: false, message: 'Access denied. Not an admin.' });
    }

    req.admin = token_decode;
    next();

  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ success: false, message: 'Session expired. Please log in again.' });
    }
    console.error('Token verification error:', error.message);
    return res.status(401).json({ success: false, message: 'Invalid token. Please log in again.' });
  }
  console.log("Received token:", req.headers.authorization);

};

export default authAdmin;
