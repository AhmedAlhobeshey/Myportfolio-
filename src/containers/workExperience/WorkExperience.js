import React, { useContext, useEffect, lazy, Suspense } from "react";
import "./WorkExperience.scss";
const ExperienceCard = lazy(() => import("../../components/experienceCard/ExperienceCard"));
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const { isDark } = useContext(StyleContext);

  useEffect(() => {
    console.log(workExperiences.experience);
  }, []);

  if (!workExperiences.display) {
    return null;
  }

  return (
    <div id="experience">
      <Fade bottom duration={1000} distance="20px">
        <div className="experience-container" id="workExperience">
          <div>
            <h1 className="experience-heading">الخبرات المهنية</h1>
            <div className="experience-cards-div">
              <Suspense fallback={<div>Loading...</div>}>
                {workExperiences.experience.map((card, i) => (
                  <ExperienceCard
                    key={i}
                    isDark={isDark}
                    cardInfo={{
                      company: card.company,
                      desc: card.desc,
                      date: card.date,
                      companylogo: card.companylogo,
                      role: card.role,
                      descBullets: card.descBullets
                    }}
                  />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
    }
