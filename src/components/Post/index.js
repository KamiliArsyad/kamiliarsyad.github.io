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
  Fade,
} from "@chakra-ui/react";
import TextBox from "../TextBox";

const isCourseReview = (post) => post.courseReview;

const CourseReviewStats = ({ post }) => (
  <Fade in transition={{ enter: { duration: 0.4 } }}>
    <TableContainer>
      <Table>
        <TableCaption>
          {post.courseReview.course_title} - {post.courseReview.courseid}
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
  </Fade>
);

export default function Post({ post }) {
  return (
      <Container
        maxW={{ base: "container.sm", md: "container.md", lg: "container.md" }}
        py={6}
        bg="white"
        boxShadow="xl"
        borderRadius="xl"
      >
        <Stack m={5} spacing={4} minW={0}>
          {isCourseReview(post) && (
            <>
              <CourseReviewStats post={post} />
              <Divider />
            </>
          )}
          <Fade in transition={{ enter: { duration: 0.5, delay: 0.1 } }}>
            <Heading>{post.title}</Heading>
          </Fade>
          <Divider />
          <Fade in transition={{ enter: { duration: 0.5, delay: 0.2 } }}>
            <TextBox text={post.body} />
          </Fade>
        </Stack>
      </Container>
  );
}
