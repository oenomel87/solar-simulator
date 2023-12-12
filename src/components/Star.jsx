
function Star(props) {
  return (
    <mesh>
      <sphereGeometry args={[props.radius, props.width, props.height]} />
      <meshStandardMaterial color="yellow" />
    </mesh>
  )
}

export default Star;
