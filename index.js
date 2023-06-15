const Button = props => {
  //  Write your code here.
  const {text, className} = props
  return <button className = "button">{text}</button>
}

const element = (
  //  Write your code here.
  <div className = "main-container">
    <h1 className = "heading">Social Buttons</h1>
    <Button text = "Like" className = "like-button" />
    <Button text = "Comment" className = "comment-button" />
    <Button text = "Share" className = "share-button" />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
