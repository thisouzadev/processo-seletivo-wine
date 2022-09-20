import styled from 'styled-components'

export const Topbar = styled.div`
  .topbar {
    margin-bottom: 70px;
    width: 100%;
    height: 70px;
    background-color: white;
    color: #15023a;
    position: fixed;
    top: 0;
    z-index: 3;
    transition: all 1s ease;

    .wrapper {
      padding: 10px 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .left {
        display: flex;
        align-items: center;
        nav button {
          margin-left: 30px;
        }
      }

      .right {
        color: aliceblue;
        display: flex;
        flex-direction: row;
        .sideBar {
          display: flex;
          align-items: center;
        }
        .hamburger {
          width: 32px;
          height: 25px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;

          span {
            width: 100%;
            height: 3px;
            background-color: #15023a;
            transform-origin: left;
            transition: all 2s ease;
          }
        }
      }
    }

    &.active {
      background-color: #15023a;
      color: white;
      .icon {
        color: white;
      }
      .hamburger {
        span {
          &:first-child {
            background-color: white;
            transform: rotate(45deg);
          }
          &:nth-child(2) {
            opacity: 0;
          }
          &:last-child {
            background-color: white;
            transform: rotate(-45deg);
          }
        }
      }
    }
  }
`
export const SectionCartStyles = styled.section`
  cursor: pointer;
  background-color: #f9b950;
  min-width: 60px;
  min-height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
  img {
    border-radius: 0 0 16% 16%;
  }
  :hover {
    color: blue;
    transform: scale(1.1);
  }
`

export const DivCountStyles = styled.div`
  position: absolute;
  left: 64.29%;
  right: 0%;
  top: 65.5%;
  bottom: 0%;
  background: #ffffff;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 150%;
  font-weight: bolder;
  color: #4fbfa5;
`
