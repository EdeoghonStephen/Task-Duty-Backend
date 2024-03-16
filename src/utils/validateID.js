import mongoose from "mongoose";

const validateID = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  return isValid;
};

export default validateID;
