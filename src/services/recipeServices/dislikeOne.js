import ref from "../../static/firebaseRef"

const dislikeOne = (recipeId, likes) => {
  return ref.doc(recipeId).update({ likesCounter: likes });
};
export default dislikeOne;