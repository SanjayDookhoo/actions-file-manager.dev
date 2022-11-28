import SyntaxHighlighterCopy from '../../../SyntaxHighlighterCopy';

const clone = `
git clone --depth 1 --branch 0.0.1 https://github.com/SanjayDookhoo/actions-file-manager-backend.git
`;
const env = `
POSTGRES_PASSWORD=postgrespassword
HASURA_GRAPHQL_METADATA_DATABASE_URL=postgres://postgres:postgrespassword@postgres:5432/postgres
PG_DATABASE_URL=postgres://postgres:postgrespassword@postgres:5432/postgres
HASURA_GRAPHQL_ENABLE_CONSOLE=true
HASURA_GRAPHQL_DEV_MODE=true
HASURA_GRAPHQL_ENABLED_LOG_TYPES=startup, http-log, webhook-log, websocket-log, query-log
HASURA_GRAPHQL_UNAUTHORIZED_ROLE=anonymous
HASURA_PORT=8080
SERVER_PORT=5000

# should change
HASURA_GRAPHQL_ADMIN_SECRET=theadminsecretkey
HASURA_GRAPHQL_JWT_SECRET={"type": "HS256", "key": "hijkabcdefghijklmnopqrstabcdefgh"}
BACKEND_BASE_URL=http://192.168.0.20:5000 # change this to be the ip local ip address, keep the port the same, note, localhost will not work here
S3_ACCESS_KEY_ID=aws-access-id
S3_SECRET_ACCESS_KEY=aws-access-key
S3_ENDPOINT=http://aws-endpoint.com
S3_BUCKET=aws-endpoint.test
HASURA_GRAPHQL_JWT_SECRET_KEY=hijkabcdefghijklmnopqrstabcdefgh # should match HASURA_GRAPHQL_JWT_SECRET
SECRET_HEADER=theadminsecretkey # should match HASURA_GRAPHQL_ADMIN_SECRET
GRAPHQL_ENDPOINT=http://localhost:8080/v1/graphql
GRAPHQL_ENDPOINT_WS=ws://localhost:8080/v1/graphql
USER_MAX_SIZE_CHECK='async (userId, axios) => {
	return 262144000; // x Bytes = 250 MegaBytes
}'
TOKEN_FILTER='.userMeta.userId' # if spaces are used: TOKEN_FILTER='."user meta".userId'
`;
const dockerCompose = `
cd server 
docker build -t actions-file-manager: .
cd ../
sudo docker-compose up -d
`;

const Backend = () => {
	return (
		<>
			<h1 className="text-2xl py-4">Notes</h1>
			<div>
				*Note: Docker and Docker Compose must be installed, please see offical
				Docker docs before proceeding <br />
				<br /> Choose the latest version to git clone and take note of the first
				number in the tag, the frontend must also have the matching major
				release number
			</div>
			<SyntaxHighlighterCopy
				language="bash"
				codeString={clone}
			></SyntaxHighlighterCopy>
			<div>
				Enter the newly created directory and create a .env file with similar
				values as below
			</div>
			<SyntaxHighlighterCopy
				language="plaintext"
				codeString={env}
			></SyntaxHighlighterCopy>
			<div>Run the following commands in the current directory below</div>
			<SyntaxHighlighterCopy
				language="bash"
				codeString={dockerCompose}
			></SyntaxHighlighterCopy>
		</>
	);
};

export default Backend;
