import Head from "next/head";
import { Box, Container } from "@mui/material";
import { CustomerListResults } from "../components/customer/customer-list-results";
import { Reports } from "../components/customer/reportsAdd";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";

const Page = () => (
  <>
    <Head>
      <title>Reports | Material Kit</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <Reports />
        <Box sx={{ mt: 3 }}>{/* project here */}</Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
