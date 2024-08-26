// data/workExperience.ts
import { FaBriefcase, FaPython, FaDatabase, FaChartBar, FaAws, FaReact, FaChalkboardTeacher, FaHandScissors, FaDeploydog, } from 'react-icons/fa';
import { SiApachehadoop, SiAzuredevops, SiDocker, SiOpenai, SiPowerbi, SiTicketmaster } from 'react-icons/si';
import { PiMathOperationsFill } from "react-icons/pi";
import React from 'react';
import { BiSupport } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { VscAzureDevops } from 'react-icons/vsc';
import { ScissorsIcon } from '@radix-ui/react-icons';
import { FaAppStore, FaLinux, FaWatchmanMonitoring } from 'react-icons/fa6';

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  year: number;
  description: string[];
  skills: Skill[];
  logo: string;
}

export const workExperiences: WorkExperience[] = [
{
    company: "Ascendion",
    position: "Lead Engineer",
    duration: "July 2021 - March 2024",
    year: 2021,
    description: [
      ""
    ],
    skills: [
      { name: "ServiceNow Incident Management", icon: SiTicketmaster },
      { name: "Azure", icon: SiAzuredevops },
      { name: "Docker", icon: SiDocker },
      { name: "Open AI and Power Platform", icon: SiOpenai }
    ],
    logo: "/logos/concordia-university.png" // Add the path to the Concordia University logo
  },
  {
    company: "RareRoots Organic",
    position: "Co-Founder",
    duration: "March 2020 - June 2021 ",
    year: 2020,
    description: [
      "Setup business operations page to accept Orders and integrated RazorPay payment gateway to accept online orders ",
      "Enhanced business process efficiency and decision support by collecting feedback from end users to optimize logistics and delivery of business"
    ],
    skills: [
      { name: "Python", icon: FaPython },
      { name: "SQL", icon: FaDatabase },
      { name: "Power BI", icon: SiPowerbi },
      { name: "API Integration", icon: FaAppStore },
    ],
    logo: "/logos/ia-flow.png"
  },
  {
    company: "GreyNubo",
    position: "Systems Engineer",
    duration: "October 2017 – March 2020",
    year: 2017,
    description: [
      "Troubleshooting AWS S3 bucket transfers via integrated Web Methods and ensure the transfer of various documents like Purchase Orders, Change Orders, Invoices from the application.",
      "Build and Deployment of AWS infrastructure and applications using Spinnaker.",
      "Implemented and managed monitoring solutions using Grafana and Prometheus to track system performance, uptime and downtime of Applications running.",
      "Working on Akamai and Cloud Front for content delivery." ,
      "SSL Certificate management for sites." ,
      "Deploying ELK solution for logging and visualization."
    ],
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Deployments", icon: FaDeploydog },
      { name: "Client Communication", icon: FaBriefcase },
      { name: "Prometheus and Grafana", icon: FaWatchmanMonitoring},
    ],
    logo: "/logos/ia-flow.png"
  },
  {
    company: "Edureka",
    position: "Technical Consultant",
    duration: "June 2014 – October 2017",
    year: 2014,
    description: [
      "Managed and automated the creation and maintenance of AWS Ec2 Vm’s programmatically with CloudFormation templates.",
      "Set up Bigdata hadoop cluster with auto-scaling nodes and high availability. ",
      "AWS Auto Scaling and Load Balancers. ",
      "Implemented robust backup storage solutions and AWS Glacier for archival storage and retrieval.",
      "Configured notification services using AWS SNS to manage system alerts and used Cloud Watch Monitoring and AWS billing which Optimized the monetary resources spent on Instances by at least 30%."
    ],
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "BigData and Hadoop", icon: SiApachehadoop },
      { name: "Client Communication", icon: FaBriefcase },
      { name: "Linux", icon: FaLinux},
    ],
    logo: "/logos/ia-flow.png"
  }
];
