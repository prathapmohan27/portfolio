import { H1 } from '../about/AboutStyle';
import { data } from '../data/icon';
import { GridContainer, Card } from './SkillStyle';

const Skill = () => {
  return (
    <div id="skill">
      <H1>Skills</H1>
      <GridContainer>
        {data.map((obj, i) => {
          return (
            <Card key={i}>
              <figure>
                <img
                  src={require(`../assets/${obj.path}`)}
                  alt={`${obj.title}`}
                />
                <figcaption>{obj.title}</figcaption>
              </figure>
            </Card>
          );
        })}
      </GridContainer>
    </div>
  );
};

export default Skill;
