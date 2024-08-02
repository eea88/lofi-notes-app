# Routes

The Routes in the App work this way:

| Pages        | URL                             | Routes                         | Other Links        |
| ------------ | ------------------------------- | ------------------------------ | ------------------ |
| App          |                                 |                                |
| Home         | ./                              | CreateEvent                    | CreateUser         |
| CreateEvent  | ./users/:userId/events/create   | User Page                      |
| EventDetails | ./users/:userId/events/:eventId |                                | Add, Invite, Share |
| UserPage     | ./users/:userId                 | CreateEvent, EventDetails-List |
| CreateUser   | ./users/create                  |

|About

# Naming Conventions

The Naming Conventions in the App work this way:

| Name                    | Description    | Example                                                    |
| ----------------------- | -------------- | ---------------------------------------------------------- |
| Components              | `PascalCase`   | CreateEvent, EventDetails, UserPage, CreateUser, About     |
| Routes                  | `kebab-case  ` | create-event, event-details, user-page, create-user, about |
| Dynamic part of the URL | `camelCase`    | :userId, :eventId                                          |
| functions               | `camelCase`    | createEvent, eventDetails, userPage, createUser, about     |
| variables               | `camelCase`    | userName, eventName, eventDate, eventTime                  |
| css classes             | ` kebab-case`  | event-details, user-card, create-user, about               |

## Asynchronous Functions

We are handling asynchronous code with .then() and .catch() methods.

```javascript
function getUsers() {
  supabase
    .from("users")
    .select()
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}
```
