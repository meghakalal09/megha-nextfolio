"use client";

import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaSpotify,
  FaLink,
  FaUserTie,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/config";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex justify-between items-center px-0 py-0 text-sm">
      <small className="block lg:mt-4 mt-2 ">
        <time>© Copyright {YEAR} Megha Kalal</time>{" "}
      </small>

      <div className="text-sm text-right">
        <div className="flex gap-4 justify-end mb-1 text-xl">
          <SocialLink href={socialLinks.github} icon={FaGithub} />
          <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
          <SocialLink href={socialLinks.email} icon={TbMailFilled} />
          <SocialLink href={socialLinks.spotify} icon={FaSpotify} />
          <SocialLink href={socialLinks.topmate} icon={FaUserTie} />
        </div>
        <div>
          <span>Drop me an email, or say hi on LinkedIn!</span>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <SocialLinks />
    </small>
  );
}
