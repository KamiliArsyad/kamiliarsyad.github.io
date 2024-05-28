export enum PostType {
  BLOG = "Blog",
  COURSE_REVIEW = "Course Review",
  PROJECT = "Project",
  ACADEMICS = "Academics",
}

export default interface PostModel {
  title: string;
  body: string;
  author: string; // to be renamed to authorId - await contract system
  categories: string; // to be replaced with an array of strings - await backend
  imageURL: string;
}

export interface CourseReviewModel extends PostModel {
  courseReview: {
    courseid: string;
    course_title: string;
    review_body: string;
    academic_semester: string;
    taught_by: string;
  };
}

/**
 * Creates an empty PostModel
 * @returns PostModel with empty fields
 */
export const createEmptyPost = (): PostModel => ({
  title: "",
  body: "",
  author: "",
  categories: "",
  imageURL: "",
});

/**
 * Creates an empty CourseReviewModel
 * @returns CourseReviewModel with empty fields
 */
export const createEmptyCourseReview = (): CourseReviewModel => ({
  title: "-",
  body: "-",
  author: "",
  categories: "-",
  imageURL: "",
  courseReview: {
    courseid: "",
    course_title: "",
    review_body: "",
    academic_semester: "",
    taught_by: "",
  },
});
