import TestFile from './test.md'
import MarkDown from './MarkDown';
import styled from 'styled-components';

const MarkDownContainer = styled.div`
  width:600px;
  height: 500px;
  margin: 0 auto;
  overflow:scroll;
`;

const MarkDownDemo = () => (
  <div>
    <h1>test</h1>
    <MarkDownContainer>
      <MarkDown file={TestFile}></MarkDown>
    </MarkDownContainer>
  </div>
);

export default MarkDownDemo