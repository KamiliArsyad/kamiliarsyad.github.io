import {
  Container,
  Divider,
  Heading,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import TextBox from "../TextBox";

const isCourseReview = (post) => {
  return post.courseReview;
};

const CourseReviewStats = ({ post }) => {
  return (
    <TableContainer>
      <Table>
        <TableCaption>
          {post.courseReview.course_title} - {post.courseReview.courseid}{" "}
        </TableCaption>
        <Tbody>
          <Tr>
            <Td>
              <b>Course ID</b>
            </Td>
            <Td>{post.courseReview.courseid}</Td>
          </Tr>
          <Tr>
            <Td>
              <b>AY Taken</b>
            </Td>
            <Td>{post.courseReview.academic_semester}</Td>
          </Tr>
          <Tr>
            <Td>
              <b>Taught by</b>
            </Td>
            <Td>{post.courseReview.taught_by}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default function Post({ post }) {
  return (
    <Container
      maxW={{ base: "container.sm", md: "container.md", lg: "container.md" }}
      py={6}
      bg="white"
      boxShadow="xl"
      borderRadius="xl"
    >
      <Stack margin="5">
        {isCourseReview(post) && (
          <>
            <CourseReviewStats post={post} />
            <Divider />{" "}
          </>
        )}
        <Heading>{post.title}</Heading>
        <Divider />
        <TextBox text={post.body} />
      </Stack>
    </Container>
  );
}
