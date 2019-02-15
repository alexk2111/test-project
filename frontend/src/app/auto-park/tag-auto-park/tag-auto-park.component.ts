import { Component, Input, OnInit } from '@angular/core';
import { AutoPark } from "../../models/auto-park";
import { TagsService } from "../../services/tags";

@Component({
  selector: 'app-tag-auto-park',
  templateUrl: './tag-auto-park.component.html',
  styleUrls: ['./tag-auto-park.component.css']
})
export class TagAutoParkComponent implements OnInit {
  @Input() autoParkTags: AutoPark;
  newTag: string;

  constructor(
    private tagsService: TagsService,
  ) { }

  ngOnInit() {
  }

  deleteTag(id){
    this.tagsService.deleteTag(id).subscribe((tags: AutoPark) => {
      this.autoParkTags = new AutoPark(tags);
    }, error => console.log(error))
  }

  addNewTag(newTag) {
    this.tagsService.addTag(newTag, this.autoParkTags.id).subscribe((tags: AutoPark) => {
      this.autoParkTags = new AutoPark(tags);
    }, error => console.log(error))

  }

}
