/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as JulepApi from "../../api";
import * as core from "../../core";
export declare const Episode: core.serialization.ObjectSchema<
  serializers.Episode.Raw,
  JulepApi.Episode
>;
export declare namespace Episode {
  interface Raw {
    type: "episode";
    subject?: string | null;
    content: string;
    weight: number;
    created_at: string;
    last_accessed_at: string;
    happened_at: string;
    duration?: number | null;
    id: string;
  }
}
