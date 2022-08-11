import AccordionItem from "../UI/AccordionItem";
import GeneralUserInfo from "./GeneralUserInfo";
import ProfileNavigation from "./ProfileNavigation";
import ExperienceItem from "./ExperienceItem";

import classes from "./ProfilePage.module.css";
import SkillItem from "./SkillItem";

const experienceArr = [
  {
    jobTitle: "UI designer",
    company: "Company X",
    dateFrom: "dec 2020",
    dateTo: "nov 2021",
    technology: "technology",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error magnam mollitia possimus delectus, harum nesciunt eveniet porro doloribus ad unde eius? Recusandae maxime doloribus iure eligendi, perspiciatis cupiditate sint?",
  },
  {
    jobTitle: "UI designer",
    company: "Company y",
    dateFrom: "nov 2190",
    dateTo: "nov 2020",
    technology: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error magnam mollitia possimus delectus, harum nesciunt eveniet porro doloribus ad unde eius? Recusandae maxime doloribus iure eligendi, perspiciatis cupiditate sint?",
  },
];
const skillsArr = [
  {
    name: "UI",
  },
  {
    name: "UX",
  },
];

const ProfilePage = () => {
  return (
    <div className={classes.mainPage}>
      <div className={classes.pageContainer + " " + classes.centerHorizontally}>
        <ProfileNavigation />
        <GeneralUserInfo />

        <div className={classes.accordionCard}>
          <AccordionItem title="My experience">
            {experienceArr.map((item) => (
              <ExperienceItem key={Math.random()} item={item} />
            ))}
          </AccordionItem>
          <AccordionItem title="Skills">
            {skillsArr.map((item) => (
              <SkillItem key={Math.random()} item={item} />
            ))}
          </AccordionItem>
          <AccordionItem title="Languages" />
          <AccordionItem title="Education" />
          <AccordionItem title="Courses" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
