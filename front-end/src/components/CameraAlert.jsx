"use client"

import * as React from "react"
import * as CameraAlertPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const CameraAlert = CameraAlertPrimitive.Root

const CameraAlertTrigger = CameraAlertPrimitive.Trigger

const CameraAlertPortal = CameraAlertPrimitive.Portal

const CameraAlertOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <CameraAlertPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref} />
))
CameraAlertOverlay.displayName = CameraAlertPrimitive.Overlay.displayName

const CameraAlertContent = React.forwardRef(({ className, ...props }, ref) => (
  <CameraAlertPortal>
    <CameraAlertOverlay />
    <CameraAlertPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-[400px] max-h-auto translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props} />
  </CameraAlertPortal>
))
CameraAlertContent.displayName = CameraAlertPrimitive.Content.displayName

const CameraAlertHeader = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
    {...props} />
)
CameraAlertHeader.displayName = "CameraAlertHeader"

const CameraAlertFooter = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props} />
)
CameraAlertFooter.displayName = "CameraAlertFooter"

const CameraAlertTitle = React.forwardRef(({ className, ...props }, ref) => (
  <CameraAlertPrimitive.Title ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
))
CameraAlertTitle.displayName = CameraAlertPrimitive.Title.displayName

const CameraAlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <CameraAlertPrimitive.Description
    ref={ref}
    className={cn("text-md text-muted-foreground", className)}
    {...props} />
))
CameraAlertDescription.displayName =
  CameraAlertPrimitive.Description.displayName

const CameraAlertAction = React.forwardRef(({ className, ...props }, ref) => (
  <CameraAlertPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
))
CameraAlertAction.displayName = CameraAlertPrimitive.Action.displayName

const CameraAlertCancel = React.forwardRef(({ className, ...props }, ref) => (
  <CameraAlertPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
    {...props} />
))
CameraAlertCancel.displayName = CameraAlertPrimitive.Cancel.displayName

export {
  CameraAlert,
  CameraAlertPortal,
  CameraAlertOverlay,
  CameraAlertTrigger,
  CameraAlertContent,
  CameraAlertHeader,
  CameraAlertFooter,
  CameraAlertTitle,
  CameraAlertDescription,
  CameraAlertAction,
  CameraAlertCancel,
}
