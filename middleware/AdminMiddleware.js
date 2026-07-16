
const admin = (req,res,next) => {
  try {
    if(req.user.role !== 'Admin'){
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token.' });
  }
}

module.exports = { admin }; 