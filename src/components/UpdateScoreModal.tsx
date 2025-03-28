"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { ScoreFormData, scoreFormSchema } from "@/schemas/score";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setRank, setPercentile, setCurrentScore } from "@/lib/features/score/scoreSlice";
import { toast } from "sonner";

const ScoreUpdateModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const {currentScore, percentile, rank} = useAppSelector((state)=>state.score)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ScoreFormData>({
    resolver: zodResolver(scoreFormSchema),
    defaultValues: {
      rank: rank.toString(),
      percentile: percentile.toString(),
      currentScore: currentScore.current.toString(),
    },
  });

  useEffect(()=>{
    reset({
      rank: rank.toString(),
      percentile: percentile.toString(),
      currentScore: currentScore.current.toString(),
    })
  },[currentScore, rank, percentile])

  const onSubmit = (data: ScoreFormData) => {
    dispatch(setRank(parseInt(data.rank)));
    dispatch(setPercentile(parseInt(data.percentile)));
    dispatch(setCurrentScore({
      current: parseInt(data.currentScore),
      total: 15
    }));
    setIsModalOpen(false);
    toast.success("Score updated successfully")
    reset();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    reset();
  };

  if (!isModalOpen) {
    return (
      <Button
        onClick={() => setIsModalOpen(true)}
        variant="primary"
        className="cursor-pointer"
      >
        Update
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-50">
      <div className="bg-white rounded-lg w-full max-w-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
          <div className="flex items-center gap-2 justify-between">
            <h2 className="text-xl font-semibold mb-6">Update scores</h2>
            <Image
              src={"/html.png"}
              alt="html"
              width={2048}
              height={2048}
              className="w-12 h-12"
            />
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <label className="flex items-center text-sm mb-2">
                <span className="w-6 h-6 bg-primary-dark text-white rounded-full flex items-center justify-center mr-2">
                  1
                </span>
                <p>
                  Update your <span className="font-semibold">Rank</span>
                </p>
              </label>
              <div className="flex flex-col">
                <input
                  {...register("rank")}
                  type="text"
                  className="border border-neutral-200 rounded px-4 py-2.5 text-sm"
                />
                {errors.rank && (
                  <span className="text-red-500 text-xs mt-1">{errors.rank.message}</span>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <label className="flex items-center text-sm mb-2">
                <span className="w-6 h-6 bg-primary-dark text-white rounded-full flex items-center justify-center mr-2">
                  2
                </span>
                <p>
                  Update your <span className="font-semibold">Percentile</span>
                </p>
              </label>
              <div className="flex flex-col">
                <input
                  {...register("percentile")}
                  type="text"
                  className="border border-neutral-200 rounded px-4 py-2.5 text-sm"
                />
                {errors.percentile && (
                  <span className="text-red-500 text-xs mt-1">{errors.percentile.message}</span>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <label className="flex items-center text-sm mb-2">
                <span className="w-6 h-6 bg-primary-dark text-white rounded-full flex items-center justify-center mr-2">
                  3
                </span>
                <p>
                  Update your <span className="font-semibold">Current Score (out of 15)</span>
                </p>
              </label>
              <div className="flex flex-col">
                <input
                  {...register("currentScore")}
                  type="text"
                  className="border border-neutral-200 rounded px-4 py-2.5 text-sm"
                />
                {errors.currentScore && (
                  <span className="text-red-500 text-xs mt-1">{errors.currentScore.message}</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2 mt-6">
            <Button type="button" variant="outline" className="cursor-pointer" onClick={handleCancel}>
              cancel
            </Button>
            <Button type="submit" className="cursor-pointer flex items-center gap-2">save 
               <ArrowRight className="w-5 h-5" /> 
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScoreUpdateModal;
