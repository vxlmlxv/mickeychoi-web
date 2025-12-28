# UPDATE LOG - Client Email Requirements

## Master Checklist

| Source | Requirement | Asset Logic | Target File | Action |
|--------|-------------|-------------|-------------|--------|
| **Email #1 - Homepage** |
| Email #1 | Add animated hero text at page top: "1 & Only is back", "2 Levels above you", "The work never stops", "MICKEY CHOI", "Chairman" with Nike-inspired text animation effects | No assets - CSS animation required | `src/app/page.tsx` | Create new animated hero section at top of page (before existing hero image) with staggered text reveal animations similar to Nike's homepage |
| Email #1 | Remove TrueCalf section | N/A | `src/app/page.tsx` | Delete lines 118-146 (TrueCalf Video Section including heading "트루카프 카프가드 크리에이티브 디렉터" and embedded video) |
| Email #1 | Remove Free Jiu-Jitsu section | N/A | `src/app/page.tsx` | Delete lines 170-199 (Free Jiu-Jitsu Video Section including heading "무료주짓수 별내주짓수" and embedded video) |
| Email #1 | Remove English text "CHAIRMAN MICKEY CHOI" from footer | N/A | `src/components/Footer.tsx` | Modify line 25 to remove "CHAIRMAN MICKEY CHOI" text, keeping only "Mickey Choi Group. All rights reserved." |
| Email #1 | Add Naver Blog icon to social links | N/A | `src/resources/content.tsx` | Add new social link object with name: "Naver Blog", icon: "naver" (or appropriate icon), link: Naver blog URL |
| **Email #2 - KUBJJ Page** |
| Email #2 | Remove side logos (KU logo and KUBJJ logo) from header | N/A | `src/components/kubjj/KUBJJView.tsx` | Remove Image components at lines 66-72 (KU_LOGO.png) and lines 76-82 (KUBJJ_LOGO.png), keep only the KUBJJ heading |
| Email #2 | Add KUBJJ logo below tagline "지성知性에 무예武藝를 더하다" | `kubjj_logo.png` → `public/images/kubjj_logo.png` | `src/components/kubjj/KUBJJView.tsx` | Insert Image component after line 91 (after the tagline Text) to display kubjj_logo.png centered |
| Email #2 | Make both videos play directly without poster thumbnails | N/A | `src/components/kubjj/KUBJJView.tsx` | Remove `poster` attribute from video element at line 237 and line 322; optionally add `autoplay muted loop` attributes |
| Email #2 | Replace Mickey Choi logo at bottom with news article image | `kubjj_news.jpg` → `public/images/kubjj_news.jpg` | `src/components/kubjj/KUBJJView.tsx` | Replace lines 372-378 (Mickey Choi logo Image) with kubjj_news.jpg, update src to "/images/kubjj_news.jpg", maintain similar styling |
| Email #2 | Left-align text from first paragraph through "동아리의 성장" section (excluding subtitle and last paragraph) | N/A | `src/components/kubjj/KUBJJView.tsx` | Change `align="center"` to `align="left"` for Text components: lines 104-113 (intro text), 158-169 (story section text), 204-225 (values section text), 278-295 (growth section text). Keep subtitle headings centered. |
| **Email #3 - Legitimacy Page** |
| Email #3 | Update first lineage section title and content | Hilton Leon photo, Mickey Choi photo (need to identify existing images or add new ones) | `src/components/legitimacy/LegitimacyView.tsx` | Modify content array index 0: change title to "레드벨트 10단 직계 블랙벨트 계보", keep description as "힐튼레옹 → 미키최", update image to show lineage photos |
| Email #3 | Update third section for 5-dan lineage | Article capture image (need asset) | `src/components/legitimacy/LegitimacyView.tsx` | Modify content array index 2: change title to "블랙벨트 5단 한국 최고단 계보", change description to "힐튼레옹 → 타카오타니 → 미키최", update image to article capture |
| **Email #4 - Worldwide Page** |
| Email #4 | Add new Canada video between current second and third videos | New video ID required from client (Canadian seminar/training video) | `src/app/worldwide/page.tsx` | Insert new video object at index 2 in videos array with title "Canada" and video ID from client |
| Email #4 | Update all video titles with country labels in English | N/A | `src/app/worldwide/page.tsx` | Update videos array: Video 0 title → "Brazil", Video 1 title → "Canada", Video 2 (new) title → "Canada", Video 3 title → "Japan", Video 4 title → "USA", Video 5 title → "USA", Video 6 title → "Brazil" |
| Email #4 | Add country label headings above each video, left-aligned | N/A | `src/app/worldwide/page.tsx` | Add Heading component above each video iframe with country name, `align="left"` styling |
| **Email #5 - Worldwide Page (Additional)** |
| Email #5 | Add China image and label at very top of Worldwide page | `worldwide_china.jpg` → `public/images/worldwide_china.jpg` | `src/app/worldwide/page.tsx` | Insert new section after page title (line 79) with Heading "China" (left-aligned) and Image component for worldwide_china.jpg |

---

## Implementation Notes

### Email #1 - Homepage Animations
The client references [Nike's homepage](https://about.nike.com/en/) for text animation inspiration. This requires:
- Staggered fade-in and slide-up animations for each text line
- Sequential reveal timing
- "Chairman" should appear smaller below "MICKEY CHOI"
- Consider using CSS keyframe animations or libraries like Framer Motion

### Email #2 - KUBJJ Page Alignment
Per client reference to [Naver blog post](https://m.blog.naver.com/linebreakau/224094223198), the text alignment should be:
- Subtitle headings: keep centered
- Body paragraphs (first paragraph → "동아리의 성장" section end): left-aligned
- Last paragraph/CTA: keep centered

### Email #4 - Missing Video Asset
**ACTION REQUIRED:** Client mentioned adding a video between second and third, but did not provide the video ID/link. Need to:
1. Request the Canadian training video YouTube ID from client
2. Once received, insert at index 2 of videos array

### Email #5 - Worldwide Page Structure
After all modifications, the Worldwide page should display in this order:
1. Page title "Worldwide"
2. **China** section (image with label) - NEW
3. Video 1: Brazil
4. Video 2: Canada
5. Video 3: Canada (new video from Email #4)
6. Video 4: Japan
7. Video 5: USA
8. Video 6: USA
9. Video 7: Brazil
10. Blog post images (existing)

### Asset Verification
Confirmed assets already in repository:
- ✅ `/public/images/kubjj_logo.png`
- ✅ `/public/images/kubjj_news.jpg`
- ✅ `/public/images/worldwide_china.jpg`

Missing/TBD assets:
- ⚠️ Canada video ID (Email #4)
- ⚠️ Naver Blog icon (may need to add custom icon or use generic blog icon)
- ⚠️ Specific Hilton Leon and Mickey Choi lineage photos for Legitimacy page (Email #3)

---

## Technical Implementation Priority

### Phase 1: Simple Deletions & Text Updates (Low Risk)
1. Email #1: Remove TrueCalf and Free Jiu-Jitsu sections
2. Email #1: Update Footer text
3. Email #2: Remove side logos from KUBJJ header
4. Email #2: Update text alignment on KUBJJ page

### Phase 2: Asset Additions (Medium Risk)
1. Email #2: Add kubjj_logo.png to KUBJJ page
2. Email #2: Replace bottom logo with kubjj_news.jpg
3. Email #5: Add China section to Worldwide page
4. Email #3: Update Legitimacy page images and text

### Phase 3: Complex Additions (Higher Risk)
1. Email #1: Implement animated hero text section (requires CSS/animation work)
2. Email #2: Modify video player behavior (remove posters)
3. Email #4: Add country labels and restructure Worldwide videos
4. Email #1: Add Naver Blog social icon

---

## Client Communication Required

**Before finalizing Email #4 implementation:**
- Request the YouTube video ID for the new Canada video
- Confirm: Should existing videos be re-ordered, or is it specifically the new video that goes between current index 1 and 2?

**For Email #1:**
- Confirm Naver Blog URL for the social icon link
- Review animated text design mockup before implementation (optional)

**For Email #3:**
- Clarify which specific images should be used for Hilton Leon and Mickey Choi lineage photos
- Confirm if existing legitimacy images can be reused or if new photos are needed

---

**Status:** Blueprint Complete ✅
**Next Step:** Proceed with code implementation following the priority phases above.
