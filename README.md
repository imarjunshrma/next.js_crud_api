
# Next.js Crud Api

How to make Apis in Next.js using route handlers



## API Reference

#### Get all users

```http
   /api/user
```

#### Get a user

```http
  /api/user/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |




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

