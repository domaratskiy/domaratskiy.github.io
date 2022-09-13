import { combineReducers  } from "redux";
import  header from "./headerReduser";
import  S1 from "./section1Reduser";
import  S2 from "./section2Reduser";
import  S3 from "./section3Reduser";
import  compasions from "./compasionsRedusers";
import  rightBlog from "./rightBlogReduser";
import  suport from "./suport_reduser";
import  blogPost1 from "./blogPost1-reduser";

export let rootReducers = combineReducers({
   header,
   S1,
   S2,
   S3,
   compasions,
   rightBlog,
   suport,
   blogPost1
});