// STEP 1: Import all the necessary pages here
import FancyForm from "./pages/FancyForm";

// STEP 2: Import all the necessary icons here
import { FormOutlined } from "@ant-design/icons";

// STEP 3: Create a new object and append to the list below.
const AppContents = [
  {
    jsx: FancyForm,
    route: "/",
    title: "Fancy Form",
    icon: FormOutlined,
  },
];

export default AppContents;
