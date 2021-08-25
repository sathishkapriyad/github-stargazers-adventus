
const Repository = ({repo}) => {
    console.log(repo);
    return (
        <div>
            {repo.name}
            {repo.stargazers.totalCount}
            
        </div>
    )
}

export default Repository
