import styled from 'styled-components'

export const MenuSideBar = styled.div`
  margin-top: 70px;
  width: 300px;
  height: 100%;
  background-color: #15023a;
  position: fixed;
  top: 0;
  right: -300px;
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: all 1s ease;
  color: white;

  &.active {
    right: 0;
  }
`
