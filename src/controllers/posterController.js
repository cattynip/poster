const BASE_PUG_PATH = "../views/posters/";
const BAD_REQUEST_CODE = 400;
const NOT_FOUND_CODE = 404;
const OK_CODE = 200;

export const watchPoster = (req, res) => {
  return res.render(BASE_PUG_PATH + "watch", {
    pageTitle: "Username / PosterName",
  });
};

export const getCreateNewPoster = (req, res) => {
  return res.render(BASE_PUG_PATH + "new", {
    pageTitle: "Create a New Poster",
  });
};

export const psotCreateNewPoster = (req, res) => {
  return res.end();
};

export const getEditPoster = (req, res) => {
  return res.render(BASE_PUG_PATH + "edit", {
    pageTitle: "Username / PosterName",
  });
};

export const postEditPoster = (req, res) => {
  return res.end();
};
