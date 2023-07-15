const END_POINTS = {
    LOGIN_STUDENT:'api/auth/student-login',
    REGISTER_STUDENT:'api/auth/student-register',
    GOOGLE_LOGIN_STUDENT:'api/auth/login-with-google',
    REGISTER_INSTRUCTOR:'api/auth/instructor/instructor-register',
    LOGIN_INSTRUCTOR:'api/auth/instructor/instructor-login',
    LOGIN_ADMIN:'api/auth/admin/admin-login',
    GET_INSTRUCTOR_REQUESTS:'api/instructors/view-instructor-requests',
    GET_INSTRUCTOR:'api/instructors/view-instructor',
    ACCEPT_INSTRUCTOR_REQUESTS:'api/instructors/accept-instructor-request',
    REJECT_INSTRUCTOR_REQUESTS:'api/instructors/reject-instructor-request',
    GET_INSTRUCTORS:'api/instructors/get-all-instructors',
    BLOCK_INSTRUCTORS:'api/instructors/get-all-instructors/block-instructors',
    UNBLOCK_INSTRUCTORS:'api/instructors/get-all-instructors/unblock-instructors',
    GET_BLOCKED_INSTRUCTORS:'api/instructors/get-blocked-instructors',
    ADD_COURSE:'api/courses/instructors/add-course',
    GET_ALL_COURSES:'api/courses/get-all-courses',
    GET_COURSE:'api/courses/get-course',
    REFRESH_TOKEN:'api/all/refresh-token/refresh',
    GET_COURSES_BY_INSTRUCTORS:'api/courses/get-course-by-instructor',
    GET_LESSONS_BY_COURSE:'api/courses/instructors/get-lessons-by-course',
    ADD_LESSON:'api/courses/instructors/add-lesson',
    GET_LESSONS_BY_ID:'api/courses/get-lessons-by-id',
    STREAM_VIDEO:'api/video-streaming/stream-video',
    GET_QUIZZES_BY_LESSON:'api/courses/get-quizzes-by-lesson',
    ADD_DISCUSSION:'api/courses/lessons/add-discussion',
    GET_DISCUSSIONS_BY_LESSON:'api/courses/lessons/get-discussions-by-lesson',
    EDIT_DISCUSSION:'api/courses/lessons/edit-discussion',
    DELETE_DISCUSSION:'api/courses/lessons/delete-discussion',
    REPLY_TO_DISCUSSION:'api/courses/lessons/reply-discussion',
    GET_REPLIES_BY_DISCUSSION:'api/courses/lesson/replies-based-on-discussion',
    PAY_USING_STRIPE:'api/payments/stripe/create-payment-intent',
    GET_CONFIG:'api/payments/stripe/get-config',
    ENROLL_STUDENT:'api/courses/enroll-student',
    ADD_CATEGORY:'api/category/add-category',
    GET_ALL_CATEGORY:'api/category/get-all-categories',
    GET_CATEGORY_BY_ID:'api/category/get-category',
    EDIT_CATEGORY:'api/category/edit-category',
    GET_RECOMMENDED_COURSES:'api/courses/get-recommended-courses',
    GET_TRENDING_COURSES:'api/courses/get-trending-courses'
}
export default END_POINTS