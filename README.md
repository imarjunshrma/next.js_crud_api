
# Next.js Crud Api

How to make Apis in Next.js using route handlers



## API Reference

#### Get all users

```https
  GET /api/user
```

#### Get a user

```https
  GET /api/user/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |


#### Create New User

```https
  POST /api/user
```

#### Update New User

```https
  PUT /api/user/id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to Update|

#### Delete New User

```https
  Delete /api/user/id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to Delete |


## Usage/Examples

```javascript
export async function DELETE(req:Request,context:any){
    const id=context.params.id
  await fetch(`${url}/${id}`,{
      method:'DELETE',
      headers:{
          'Content-Type':"application/json"
      }
    })
  
      return NextResponse.json({message:'user has been deleted'})
  }
```


## Run Locally

Clone the project

```bash
  git clone https://github.com/imarjunshrma/next.js_crud_api.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## 🛠 Skills
React,Node,Angular,React Native,Prisma,db,C,C++...


## 🚀 About Me
I'm a full stack developer...

