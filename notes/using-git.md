# git merge

Combines multple sequences of commits into one unified history. In most common use cases, git merge is used to combine two branches.

## Before merge checklist

1. Use git status to ensure HEAD is pointing to the correct merge-receiving branch.
2. Make sure both branches are up to date with the remote repository
3. Use git merge <branch-name> to merge the development branch into the receiving branch