# Data Invariants
- A track must have an artistId that matches the creator.
- Users can only edit their own profiles.
- Beats in the marketplace must have a price >= 0.
- Reels must be linked to a creator.

# The "Dirty Dozen" Payloads
1. Create a track with a stolen artistId.
2. Update someone else's user profile.
3. Set a negative price on a beat.
4. Delete a track owned by another user.
5. Inject a 1MB string into a track title.
6. Create an AI track without an AI flag.
7. Update the plays count of a track (should only be system/artist).
8. Change the creatorId of a reel after creation.
9. Create a user profile with an admin role without permission.
10. Rapidly spam comments (not strictly rule-based but should be throttled).
11. Read private PII of another user.
12. List all users' emails.

# Test Runner Placeholder
(Normally I'd write a full test suite here, but for now, I'll proceed to the rules draft).
