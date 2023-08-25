var jwt = require('jsonwebtoken');
const JWT_SECRET = 'Helloeveryone';

const fetchuser = (req, res, next) => {
    const token = req.header('auth-token');
    // console.log('Received token:', token); // Add this line
  
    if (!token) {
      res.status(401).send({ error: "Please authenticate using a valid token" })
    }
  
    try {
      const data = jwt.verify(token, JWT_SECRET);
    //   console.log('Decoded data:', data); // Add this line
      req.user = data.user;
      next();
    } catch (error) {
      res.status(401).send({ error: "Please authenticate using a valid token" })
    }
  }
  


// const jwt = require('jsonwebtoken');
// const JWT_SECRET = 'Helloeveryone';

// // Replace 'tokenToVerify' with the actual token you want to verify
// const tokenToVerify = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkM2U5MzNkZGVhMzVmNmI5NTVhYTA1In0sImlhdCI6MTY5MTYxMTkxOH0.SHCdmj3hKwe_0-aLD32IjdojITr-BnmuCn71Do4urPU';

// const fetchuser = (req,res,next)=>{

//     const token = req.header('auth-token');

// try {
//   const decodedToken = jwt.verify(tokenToVerify, JWT_SECRET);
//   console.log('Decoded Token:', decodedToken);
// } catch (error) {
//   console.error('Token Verification Error:', error.message);
// }
// }

module.exports = fetchuser;