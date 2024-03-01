import React, { useEffect, useRef } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = ({minWidth}) => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  const form = useRef();
  const formWidth= window.screen.width> 1200 ? "1024px" : "512px"

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      enquiry_type: "hireMe",
      message: "",
    },
    onSubmit: (values) => {
      submit(values, form.current);
    },
    validationSchema: Yup.object({
      user_name: Yup.string().required("Required"),
      user_email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      message: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
      alignItems="center"
      justifyContent="center"
      // minWidth={minWidth}
    >
      <VStack w={formWidth} p={16} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form ref={form} onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={
                  !!formik.errors.user_name && formik.touched.user_name
                }
              >
                <FormLabel htmlFor="user_name">Name</FormLabel>
                <Input
                  id="user_name"
                  name="user_name"
                  {...formik.getFieldProps("user_name")}
                />
                <FormErrorMessage>{formik.errors.user_name}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={
                  !!formik.errors.user_email && formik.touched.user_email
                }
              >
                <FormLabel htmlFor="user_email">Email Address</FormLabel>
                <Input
                  id="user_email"
                  name="user_email"
                  type="email"
                  {...formik.getFieldProps("user_email")}
                />
                <FormErrorMessage>{formik.errors.user_email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="enquiry_type">Type of enquiry</FormLabel>
                <Select
                  color="gray.500"
                  fontWeight="600"
                  id="enquiry_type"
                  name="enquiry_type"
                  {...formik.getFieldProps("enquiry_type")}
                >
                  <option value="freelanceJobEnquiry">
                    Freelance project proposal
                  </option>
                  <option value="jobEnquiry">Job Inquiry</option>
                  <option value="collaborationProposal">
                    Collaboration proposal
                  </option>
                  <option value="technicalQuestions">
                    Technical Questions
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.message && formik.touched.message}
              >
                <FormLabel htmlFor="message">Your message</FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  height={250}
                  {...formik.getFieldProps("message")}
                />
                <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading}
                disabled= {!(formik.dirty && formik.isValid) || isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
