import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const IconContainer = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* padding-left: 0.5rem; */
`;

function HomeIcon() {
  return (
    <IconContainer>
      <div>
        <Link href="/">
          <Image
            src="/favicon.png"
            width={45}
            height={45}
            alt="main icon"
          ></Image>
        </Link>
      </div>
    </IconContainer>
  );
}

export default HomeIcon;
