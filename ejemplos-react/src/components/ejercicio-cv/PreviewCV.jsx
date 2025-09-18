
const PreviewCV = ({nombreCompleto, email}) => {
  return (
    <div>
      <h3>Preview de tu CV</h3>

      <p>{nombreCompleto}</p>

      <p>Email: {email}</p>
    </div>
  )
}

export default PreviewCV