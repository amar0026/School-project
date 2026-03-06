import BreadcrumbBanner from "@/components/Global/BreadcrumbBanner";
import bannerImg from "../assets/Frame 2144.png";
import SchoolRegistrationForm from "@/components/Registration.tsx/SchoolRegistrationForm";
function Registration() {
  return (
    <div>
      <BreadcrumbBanner
        title="School Registration From"
        subtitle="Enroll Your Child Today!"
        bgImage={bannerImg}
      />
      <SchoolRegistrationForm />
    </div>
  );
}

export default Registration;
