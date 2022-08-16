import styled from 'styled-components'

export const Topbar = styled.div`
  .topbar {
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
