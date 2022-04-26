import copyImg from "../assets/images/copy.svg"

import "../styles/room-code.scss"

type RoomCodeProps = {
  code: string
}

export function RoomCode({ code }: RoomCodeProps) {
  function copyRoomCodeTOClipBoard() {
    navigator.clipboard.writeText(code)
  }

  return (
    <button className="room-code" onClick={copyRoomCodeTOClipBoard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>sala #{code}</span>
    </button>
  )
}
