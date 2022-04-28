import { ReactNode } from "react"
import cx from "classnames"

import "../styles/question.scss"

type QuestionProps = {
  content: string
  author: {
    name: string
    avatar: string
  }
  children?: ReactNode
  isAnwered?: boolean
  isHighlighted?: boolean
}

export function Question({
  content,
  author,
  children,
  isAnwered = false,
  isHighlighted = false,
}: QuestionProps) {
  return (
    <div
      className={cx(
        "question",
        { answered: isAnwered },
        { highlighted: isHighlighted && !isAnwered }
      )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  )
}
