import { useState } from "react"
import LinkButton from "../LinkButton"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"
import Title from "./Title"

export default function Profile(props) {
  //[valor, funcaoModificadora]
  //const state = useState("Follow")
  const [followText, setFollowText] = useState("Follow")

  function handleClick() {
    setFollowText("Following")
  }

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>Name: </span>
        {props.name}
        <button className={styles.followButton} onClick={handleClick}>{followText}</button>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection
        className={styles.links}
        id="links-section"
        data-test="some value"
        aria-label="social links"
      >
        <LinkButton href={props.githubUrl}>GitHub</LinkButton>
        <LinkButton href={props.linkedinUrl}>LinkedIn</LinkButton>
        <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
      </ProfileSection>
    </div>
  )
}