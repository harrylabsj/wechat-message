# wechat-message

Send and manage WeChat messages via wacli CLI. Supports sending messages to contacts/groups, searching chat history, and syncing conversations.

## Usage

Send a message to a contact or group:
```
Send "Hello" to [contact_name] on WeChat
```

Search chat history:
```
Search WeChat messages containing "keyword"
```

List recent chats:
```
List my WeChat conversations
```

## Requirements

- `wacli` CLI tool installed and configured
- WeChat account authenticated with wacli

## Configuration

No additional configuration required. The skill uses the system's wacli installation.

## Notes

- Contact names are matched using wacli's fuzzy search
- For group chats, use the group name as the contact name
- Message history search requires wacli sync to be run periodically
