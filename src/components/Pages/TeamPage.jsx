import React from 'react';
import Spacing from '../Spacing';
import SectionHeadingStyle3 from '../SectionHeading/SectionHeadingStyle3';
import TeamMember from '../TeamMember';
import SectionHeading from '../SectionHeading';
import Hiring from '../Hiring';
import { pageTitle } from '../../helpers/PageTitle';
const circularList = [
  { number: '01', title: 'Front - End Developer', href: '/' },
  { number: '02', title: 'UI/UX Designer', href: '/' },
  { number: '03', title: 'Digital Marketer', href: '/' },
  { number: '04', title: 'SEO Expert', href: '/' },
];

export default function TeamPage() {
  pageTitle('Team');
  return (
    <>
      <Spacing lg="70" md="70" />
      <Spacing lg="140" md="80" />
      <SectionHeadingStyle3
        title="Talented individuals <br/>dedicated to your success"
        subTitle="Team Members"
        shape="shape_4"
      />
      <Spacing lg="75" md="60" />
      <section>
        <div className="container">
          <div className="row cs_gap_y_35">
            <div className="col-lg-4 col-sm-6">
              <TeamMember
                memberImg="/images/studio-agency/team_1.jpeg"
                memberName="Satyam Vatsa"
                memberDesignation="Project Manager"
                href="/team/team-details"
              />
            </div>
            <div className="col-lg-4 col-sm-6">
              <TeamMember
                memberImg="/images/studio-agency/team_2.jpeg"
                memberName="Nidhi Pathak"
                memberDesignation="Motion / Graphic Designer"
                href="/team/team-details"
              />
            </div>
            <div className="col-lg-4 col-sm-6">
              <TeamMember
                memberImg="/images/studio-agency/team_3.jpeg"
                memberName="Mukesh Kumar"
                memberDesignation="3D Artist"
                href="/team/team-details"
              />
            </div>
            <div className="col-lg-4 col-sm-6">
              <TeamMember
                memberImg="/images/studio-agency/team_4.jpeg"
                memberName="Sai Charan"
                memberDesignation="UI Designer"
                href="/team/team-details"
              />
            </div>
            <div className="col-lg-4 col-sm-6">
              <TeamMember
                memberImg="/images/studio-agency/team_5.jpeg"
                memberName="Om Vats"
                memberDesignation="Video Editor"
                href="/team/team-details"
              />
            </div>
            <div className="col-lg-4 col-sm-6">
              <TeamMember
                memberImg="/images/studio-agency/team_6.jpeg"
                memberName="Ravneet Singh"
                memberDesignation="Front-end Developer"
                href="/team/team-details"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <Spacing lg="130" md="60" />
        <div className="container">
          <SectionHeading
            title="Want to join our team?"
            subTitle="Bellow check our open position right now"
          />
          <Spacing lg="85" md="45" />
        </div>
        <Hiring
          thumbnailSrc="/images/others/hiring_img.jpeg"
          data={circularList}
        />
        <Spacing lg="150" md="80" />
      </section>
    </>
  );
}
