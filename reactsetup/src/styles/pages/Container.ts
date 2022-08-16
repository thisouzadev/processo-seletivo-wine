import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
  height: 100%;
  padding: 0px;
  /* margin: 0px; */
  /* background-color: #fafafa; */
`
export const ContainerLeft = styled.div`
  margin-bottom: 100%;
  padding-bottom: 20px;
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`
export const ContainerRight = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`
export const ContainerCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`
