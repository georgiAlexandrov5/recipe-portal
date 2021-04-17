import ref from "../../static/firebaseRef"

const likeOne = (recipeId, likes) => {
  return ref.doc(recipeId).update({ likesCounter: likes });
};
export default likeOne;