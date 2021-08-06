// import qs from 'querystring'

export default function homeContent(props: any) {
  // const { id, title } = props.match.params
  // const { id, title } = qs.parse(props.location.search.slice(1))
  const { id, title } = props.location.state
  return (
    <div>
      homeContent + {id} + {title}
    </div>
  )
}
