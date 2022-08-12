import AccordionItem from "../UI/AccordionItem";
import GeneralUserInfo from "./GeneralUserInfo";
import ProfileNavigation from "./ProfileNavigation";
import AccordionDetailsItem from "../UI/AccordionDetailsItem";
// import ExperienceItem from "./ExperienceItem";
// import SkillItem from "./SkillItem";

import classes from "./ProfilePage.module.css";

const experienceArr = [
  {
    jobTitle: "UI designer",
    company: "Company X",
    dateFrom: "dec 2020",
    dateTo: "nov 2021",
    technologies: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error magnam mollitia possimus delectus, harum nesciunt eveniet porro doloribus ad unde eius? Recusandae maxime doloribus iure eligendi, perspiciatis cupiditate sint?",
  },
  {
    jobTitle: "UI designer",
    company: "Company y",
    dateFrom: "nov 2190",
    dateTo: "nov 2020",
    technologies: ["technology1", "technology2", "technology3"],
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
const languagesArr = [
  {
    language: "English",
    level: "Upper Intermediate",
  },
  {
    language: "Ukrainian",
    level: "Native",
  },
];
const educationArr = [
  {
    university: "Some University",
    specialty: "Design",
    degree: "Master",
    location: "Lviv, Ukraine",
    dateFrom: "dec 2020",
    dateTo: "nov 2021",
    photos: "",
  },
  {
    university: "Another University",
    specialty: "Design",
    degree: "Master",
    location: "Lviv, Ukraine",
    dateFrom: "dec 2020",
    dateTo: "nov 2021",
    photos: "",
  },
];
const coursesArr = [
  {
    specialty: "Design",
    school: "Some school",
    link: "http://some-school.com",
    dateFrom: "dec 2020",
    dateTo: "nov 2021",
    photos: "",
  },
  {
    specialty: "Design",
    school: "Another school",
    link: "http://another-school.com",
    dateFrom: "dec 2020",
    dateTo: "nov 2021",
    photos: "",
  },
];

const convertItemToUniversalFormat = (item, initialFormat) => {
  let returnedValue;
  switch (initialFormat) {
    case "experience":
      returnedValue = {
        headerFirst: item.jobTitle + " at " + item.company,
        headerFirstUpdate: "",
        headerFirstAdditional: "",
        headerSecondary: "",
        headerSecondaryAdditional: "",
        period: item.dateFrom + " - " + item.dateTo,
        tags: [...item.technologies],
        description: item.description,
        photos: null,
      };
      break;
    case "skills":
      returnedValue = {
        headerFirst: item.name,
        headerFirstUpdate: "",
        headerFirstAdditional: "",
        headerSecondary: "",
        headerSecondaryAdditional: "",
        period: "",
        tags: [],
        description: "",
        photos: null,
      };
      break;
    case "languages":
      returnedValue = {
        headerFirst: item.language,
        headerFirstUpdate: item.level,
        headerFirstAdditional: "",
        headerSecondary: "",
        headerSecondaryAdditional: "",
        period: "",
        tags: [],
        description: "",
        photos: null,
      };
      break;
    case "education":
      returnedValue = {
        headerFirst: item.university,
        headerFirstUpdate: "",
        headerFirstAdditional: item.specialty,
        headerSecondary: item.degree,
        headerSecondaryAdditional: item.location,
        period: item.dateFrom + " - " + item.dateTo,
        tags: [],
        description: "",
        photos: null,
      };
      break;
    case "courses":
      returnedValue = {
        headerFirst: item.specialty,
        headerFirstUpdate: "",
        headerFirstAdditional: item.school,
        headerSecondary: "",
        headerSecondaryAdditional: "",
        link: item.link,
        period: item.dateFrom + " - " + item.dateTo,
        tags: [],
        description: "",
        photos: null,
      };
      break;
  }

  // console.log(returnedValue);
  return returnedValue;
};

const ProfilePage = () => {
  return (
    <div className={classes.mainPage}>
      <div className={classes.pageContainer + " " + classes.centerHorizontally}>
        <ProfileNavigation />
        <GeneralUserInfo />

        <div className={classes.accordionCard}>
          <AccordionItem title="My experience">
            {experienceArr.map((item) => (
              <AccordionDetailsItem key={Math.random()} item={convertItemToUniversalFormat(item, "experience")} />
            ))}
          </AccordionItem>
          <AccordionItem title="Skills">
            {skillsArr.map((item) => (
              <AccordionDetailsItem key={Math.random()} item={convertItemToUniversalFormat(item, "skills")} />
            ))}
          </AccordionItem>
          <AccordionItem title="Languages">
            {languagesArr.map((item) => (
              <AccordionDetailsItem key={Math.random()} item={convertItemToUniversalFormat(item, "languages")} />
            ))}
          </AccordionItem>
          <AccordionItem title="Education">
            {educationArr.map((item) => (
              <AccordionDetailsItem key={Math.random()} item={convertItemToUniversalFormat(item, "education")} />
            ))}
          </AccordionItem>
          <AccordionItem title="Courses">
            {coursesArr.map((item) => (
              <AccordionDetailsItem key={Math.random()} item={convertItemToUniversalFormat(item, "courses")} />
            ))}
          </AccordionItem>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
