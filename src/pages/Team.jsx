import TeamSection from '../components/TeamSection'
import { teamData } from '../data/teamData'

// auto-load foto
const images = import.meta.glob('../assets/team/*', {
  eager: true,
  import: 'default'
})

const Team = () => {
  return (
    <>
      {teamData.map((member, index) => (
        <TeamSection
          key={index}
          name={member.name}
          role={member.role}
          license={member.license}
          email={member.email}
          photo={images[`../assets/team/${member.photo}`]}
          reverse={index % 2 === 1}
        />
      ))}
    </>
  )
}

export default Team
